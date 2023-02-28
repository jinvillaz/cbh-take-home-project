# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Well, First I need to make some assumptions, for example, there is no info about if the database is relational or not. I will choose a relational in this case SQL. Second, is the functionality only for the backend? I will choose to make tickets for both sides backend and the frontend.

Ticket 1: Create a new table called CustomAgent or FacilityAgent
Description
Create a new table with the next properties customId(should be a string), facilityId, and agentId. Create the schema on the code to handle this new table.
Create a script to update the database.

Acceptance Criteria
- A table for making persistent the customId for an agent by the facility.
- Schema in the code for the new table.
- Script for updating the database.
Time/Effort Estimate
4 hours

Ticket 2: Create a new rest API for new custom agents.
Description
Create a new enpoint POST /api/custom-agents, the body 
should be:  
{
	customId: 'something',
	facilityId: 'facility1',
	agentId: 'agent1'
 }
Add validation the customId should be unique by Facility.
Save this info using the respective database handler.

Acceptance Criteria
- Create a new rest API for new custom agents.
- Add functionality to validate data and save into database.
Time/Effort Estimate
4 hours

Ticket 3: Create a Facility view to allow the creation of a custom Agent with its own customId.
Description
Create the Facility view to allow Facilities to create a custom agent,
create a select input with the list of agents available. Add input for asign the customId for the agent selected. Add button with create label. Add functionality to send api request to backend for create a this customAgent. When the custom agent is created disable or remove the agent used from the list of agents available.

Acceptance Criteria
- Create a new view by facility to create a custom agent.
- Add functionality to make request for create a custom agent.
Time/Effort Estimate
6 hours

Ticket 4: Update the function 'getShiftsByFacility' to use custom Agent IDs
Description
Add the functionality to extract the customId if it exist into table CustomAgent, add this data to agentData.

Acceptance Criteria
- Update the function with extra data about customId
Time/Effort Estimate
2 hours

Ticket 5: Update report generation function to use the new info
Description
Update the generateReport function to use the new customId. The report should still be generated with the internal database IDs when the customId is not available.

Acceptance Criteria
- The report should be generated with the new customId
- The report should be generated with internal database IDs when the customId is not provided.
Time/Effort Estimate
2 hours


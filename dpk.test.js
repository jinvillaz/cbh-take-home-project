const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const partitionKey = deterministicPartitionKey();
    expect(partitionKey).toBe("0");
  });

  it("should return partition key if event has partitionKey property and it is a string less than 256", () => {
    const partitionKey = deterministicPartitionKey({ partitionKey: "123" });
    expect(partitionKey).toBe("123");
  });

  it("should return sha3-512 hash of event if event has no partitionKey property", () => {
    const event = { something: "123" };
    const expectedHash =
      "2256e540c191747e9d47c3ed359c3e3b6fb112189ebad7c7c0e5ddad02c29b0b56daa4993aaa4a5d8c73457ee0dd91835b55fa191b56f969bbfae7295f2e7a6a";
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(expectedHash);
  });

  it("should return sha3-512 hash of stringified event if event is not an object", () => {
    const event = "something";
    const expectedHash =
      "5cc96916784936ac6c9ef034f6060f189d76582f969f79ae20612531ea161db53e10b5d2791818ac4aef0ff0677eb963a735cca798fd78e6e65a9d54b019c7b0";
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(expectedHash);
  });

  it('should return a string \'{"data":"123"}\' when the event with partitionKey is an small object', () => {
    const expected = '{"data":"123"}';
    const partitionKey = deterministicPartitionKey({
      partitionKey: { data: "123" },
    });
    expect(partitionKey).toBe(expected);
  });

  it("should return sha3-512 hash of stringified when the event with partitionKey is a big object", () => {
    const event = {
      partitionKey: {
        data1:
          "the key 1 should be a very long data for test the maximum partition key length",
        data2:
          "the key 2 should be a very long data for test the maximum partition key length",
        data3:
          "the key 3 should be a very long data for test the maximum partition key length",
      },
    };
    const expected =
      "677397b4e447da3781d7ddd35b32924632720517803227210505f2f2929898e484951b4ba1eba737c3c6ff558923681e55c281851eee846c9cfdd7a43ead10b5";
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(expected);
  });
});

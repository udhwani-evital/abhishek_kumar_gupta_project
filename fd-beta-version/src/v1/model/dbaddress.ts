import { appdb } from "./appdb";

export class dbAddress extends appdb {
  constructor() {
    super();
    this.table = "address";
    this.uniqueField = "id";
  }

  async createAddress(addressData: any) {
    try {
      // Insert the address record into the database
      const result = await this.insertRecord(addressData);
      return result;
    } catch (error) {
      console.error("Error creating address:", error);
      throw error;
    }
  }
}

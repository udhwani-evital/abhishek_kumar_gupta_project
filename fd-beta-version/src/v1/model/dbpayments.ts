import { appdb } from "./appdb";

export class dbPayments extends appdb {
  constructor() {
    super();
    this.table = "payments";
    this.uniqueField = "id";
  }

  async createPayment(
    orderId: number,
    paymentMethod: string,
    totalAmount: number
  ): Promise<any> {
    const paymentData = {
      order_id: orderId,
      method: paymentMethod,
      amount: totalAmount,
      status: "processing",
    };

    try {
      const result = await this.insertRecord(paymentData);
      return result;
    } catch (error) {
      console.log("Error creating payment:", error);
     
    }
  }
}

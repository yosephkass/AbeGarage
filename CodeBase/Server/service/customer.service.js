import { query } from "../config/pool.js";
import customerQuery from "../query/customer.query.js";

const customerService = {
  getCustomerByEmail: async (data) => {
    try {
      const row = await query(customerQuery.getCustomerByEmail, [data]);
      return row;
    } catch (error) {
      console.log(error);
    }
  },

  insertIntoCustomerIdentifierTable: async (data) => {
    try {
      const row = await query(customerQuery.insertIntoCustomerIdentifierTable, [
        data.customer_email,
        data.customer_phone_number,
        data.customer_hash,
      ]);
      return row;
    } catch (error) {
      console.log(error);
    }
  },

  insertCustomerInfoTable: async (data) => {
    try {
      const row = await query(customerQuery.insertCustomerInfoTable, [
        data.customer_id,
        data.customer_first_name,
        data.customer_last_name,
        data.active_customer_status,
      ]);
      return row;
    } catch (error) {
      console.log(error);
    }
  },
};

export default customerService;

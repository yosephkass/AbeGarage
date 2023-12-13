import customerService from "../service/customer.service.js";
import bcrypt from "bcrypt";

// const customerController = {
//   createCustomer: async (req, res) => {
//     //Check all fields are provided
//     const {
//       customer_email,
//       customer_phone_number,
//       customer_first_name,
//       customer_last_name,
//       customer_hash,
//       active_customer_status,
//     } = req.body;

//     if (
//       !customer_email ||
//       !customer_first_name ||
//       !customer_last_name ||
//       !customer_phone_number ||
//       !active_customer_status ||
//       !customer_hash
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     //Check email is unique
//     const isCustomer = await customerService.getCustomerByEmail(customer_email);

//     if (isCustomer.length) {
//       return res.status(400).json({
//         success: false,
//         message: "The email is already in use",
//       });
//     }
//     // console.log(isCustomer);

//     //check to insert data into database
//     const customerIdentifier =
//       await customerService.insertIntoCustomerIdentifierTable(req.body);

//     req.body.customer_id = customerIdentifier.insertId;

//     const customerInfo = await customerService.insertCustomerInfoTable(
//       req.body
//     );

//     //send a message to confirm sucess
//     return res.status(200).json({
//       success: true,
//       message: "customer added successfully!",
//     });
//     },
    
//     updateCustomer: async (req, res) => {
//         const {
//             customer_id,
//             customer_phone_number,
//             customer_first_name,
//             customer_last_name,
//             active_customer_status,
//         } = req.body;
//         if (
//             !customer_id ||
//             !customer_phone_number ||
//             !customer_first_name ||
//             !customer_last_name ||
//             !active_customer_status
//         ) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required",
//             });
//         };

// export default customerController;

const customerController = {
  createCustomer: async (req, res) => {
    // Check all fields are provided
    const {
      customer_email,
      customer_phone_number,
      customer_first_name,
      customer_last_name,
      customer_hash,
      active_customer_status,
    } = req.body;

    if (
      !customer_email ||
      !customer_first_name ||
      !customer_last_name ||
      !customer_phone_number ||
      !active_customer_status ||
      !customer_hash
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check email is unique
    const isCustomer = await customerService.getCustomerByEmail(customer_email);

    if (isCustomer.length) {
      return res.status(400).json({
        success: false,
        message: "The email is already in use",
      });
    }

    // Insert data into the database
    const customerIdentifier =
      await customerService.insertIntoCustomerIdentifierTable(req.body);

    req.body.customer_id = customerIdentifier.insertId;

    const customerInfo = await customerService.insertCustomerInfoTable(
      req.body
    );

    // Send a message to confirm success
    return res.status(200).json({
      success: true,
      message: "customer added successfully!",
    });
  },

  updateCustomer: async (req, res) => {
    const {
      customer_id,
      customer_phone_number,
      customer_first_name,
      customer_last_name,
      active_customer_status,
    } = req.body;

    if (
      !customer_id ||
      !customer_phone_number ||
      !customer_first_name ||
      !customer_last_name ||
      !active_customer_status
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

      const customer =
          await customerService.getCustomerByID(customer_id);
      
      if (!customer.length) {
          return res.status(400).json({
            success: false,
            message: "Customer not found",
          });
      }

      //Start updating
      const customerPhoneUpdater = await customerService.updateIntoCustomerIdentifierTable(req.body);
      const customerProfileUpdater =
        await customerService.updateCustomerInfoTable(req.body);
   

    // For now, sending a success message
    return res.status(200).json({
      success: true,
      message: "customer updated successfully!",
    });
  },
};

export default customerController;


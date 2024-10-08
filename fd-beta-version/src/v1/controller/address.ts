import express from "express";
import { Request, Response, NextFunction } from "express";
import { dbAddress } from "../model/dbaddress";
import { functions } from "../library/functions";
import { validations } from "../library/validations";
import Joi from "joi";

export function addressSchema(req: any, res: any, next: any): any {
  const schema = Joi.object({
    state: Joi.string().min(2).required(),
    street: Joi.string().min(3).required(),
    city: Joi.string().min(2).required(),
    pincode: Joi.number().required(),
  });

  const validationsObj = new validations();
  const isValid = validationsObj.validateRequest(req, res, next, schema);

  if (!isValid) {
    return false;
  }

  next();
}

const router = express.Router();

router.post("/add_address", addressSchema, addAddress);
module.exports = router;

async function addAddress(req: any, res: Response): Promise<any> {
  const functionsObj = new functions();
  try {
    const addressObj = new dbAddress(); // Create an instance of dbAddress
    const newAddress = await addressObj.createAddress({
      ...req.body,
      user_id: req.user.id,
    });

    res.send(
      functionsObj.output(1, "Address created successfully", newAddress)
    );
  } catch (error: any) {
    res.send(functionsObj.output(0, "Failed to create address"));
  }
}


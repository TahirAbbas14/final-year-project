// pages/api/user/orders/all.js
import dbConnect from "@/database/db";
import User from "@/database/models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await dbConnect();

    const user = await User.findById(decoded.id).select(
      "firstName lastName email phoneNo address orderHistory"
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    const detailedOrders = user.orderHistory.map((order) => ({
      orderDate: order.orderDate,
      totalPrice: order.totalPrice,
      status: order.status,
      address: user.address,
      phone: user.phoneNo,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
      items: order.items,
    }));

    return res.status(200).json({ orders: detailedOrders });
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

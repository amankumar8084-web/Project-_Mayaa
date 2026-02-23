const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SuperAdmin = require("../models/superadmin");

const seedSuperAdmin = async () => {
  try {

    const adminExists = await SuperAdmin.findOne({
      email: "mbshod@excelcolleges.com"
    });

    if (!adminExists) {

      const hashedPassword = await bcrypt.hash("Admin@123", 10);

      await SuperAdmin.create({
        name: "Super Admin",
        email: "mbshod@excelcolleges.com",
        password: hashedPassword
      });

      console.log("✅ Super Admin Created");
    } else {
      console.log("ℹ️ Super Admin already exists");
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = seedSuperAdmin;
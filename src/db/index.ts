import { User } from "../modules/user/user.model";
//pass: Naimur12345
const superAdminInfo = {
  name: "Naimur Rahman",
  email: "naimur@gmail.com",
  password: "Naimur12345",
};

const seedSuperAdmin = async () => {
  // check is super admin is exists
  const superAdmin = await User.findOne({ email: "naimur@gmail.com" });

  if (!superAdmin) {
    await User.create(superAdminInfo);
  }
};

export default seedSuperAdmin;

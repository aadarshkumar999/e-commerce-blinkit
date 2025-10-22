import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import isAdmin from "../utils/isAdmin";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  ShoppingCart,
  Heart,
  User,
  Star,
  LifeBuoy,
  Settings,
  LogOut,
  Box,
} from "lucide-react";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await Axios({ ...SummaryApi.logout });
      if (response.data.success) {
        if (close) close();
        dispatch(logout());
        localStorage.clear();
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const handleClose = () => close && close();

  return (
    <div className="w-full text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-lg font-semibold">My Account</h2>
          <div className="text-sm flex items-center gap-2 text-gray-600">
            <span className="max-w-52 truncate">
              {user.name || user.mobile}{" "}
              <span className="text-red-600">
                {user.role === "ADMIN" ? "(Admin)" : ""}
              </span>
            </span>
            <Link
              onClick={handleClose}
              to={"/dashboard/profile"}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <HiOutlineExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>

      <Divider className="my-3" />

      {/* Menu Section */}
      <div className="flex flex-col gap-2 bg-gray-50 rounded-2xl shadow-inner max-h-[450px] overflow-y-auto scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500 transition-all duration-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Admin Links */}
        {isAdmin(user.role) && (
          <>
            <Link
              onClick={handleClose}
              to={"/dashboard/category"}
              className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
            >
              <Box size={20} />
              <span className="text-sm font-medium">Category</span>
            </Link>
            <Link
              onClick={handleClose}
              to={"/dashboard/subcategory"}
              className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
            >
              <Box size={20} />
              <span className="text-sm font-medium">Sub Category</span>
            </Link>
            <Link
              onClick={handleClose}
              to={"/dashboard/upload-product"}
              className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
            >
              <Box size={20} />
              <span className="text-sm font-medium">Upload Product</span>
            </Link>
            <Link
              onClick={handleClose}
              to={"/dashboard/product"}
              className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
            >
              <Box size={20} />
              <span className="text-sm font-medium">Product</span>
            </Link>
          </>
        )}

        {/* Common User Links */}
        <Link
          onClick={handleClose}
          to={"/dashboard/myorders"}
          className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
        >
          <ShoppingCart size={20} />
          <span className="text-sm font-medium">My Orders</span>
        </Link>

        <Link
          onClick={handleClose}
          to={"/dashboard/address"}
          className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-200"
        >
          <User size={20} />
          <span className="text-sm font-medium">Saved Address</span>
        </Link>

        <Divider className="my-2" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-100 hover:text-red-700 transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default UserMenu;

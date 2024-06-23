import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  return (
    <div className="flex h-32 items-center justify-center top-0 p-6 lg:ml-24">
      <Link to={"/"}>
        <img src="/logo.svg" className="h-16" />
      </Link>
    </div>
  );
}

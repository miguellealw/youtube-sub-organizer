import React from "react";

const CategoryMenuList = () => (
  <li>
    {/* FIXME: These are hard coded; should be dynamic */}
    <a>My Categories</a>
    <ul>
      <li>
        <a>Music</a>
      </li>
      <li>
        <a>Web Design</a>
      </li>
      <li>
        <a>Web Development</a>
      </li>
      <li>
        <a>Low Level Programming</a>
      </li>
      <li>
        <a>Math</a>
      </li>
    </ul>
  </li>
);

export default CategoryMenuList;

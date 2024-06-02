import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";

export default function PageHeader(props) {
  let { currentPage, travelPages } = props;

  const [breadItems, setBreadItems] = useState([
    {
      href: "/",
      title: <i className="fal fa-home"></i>,
    },
  ]);

  useEffect(() => {
    let arr = [...breadItems];
    travelPages.length > 0 &&
      breadItems.length === 1 &&
      travelPages.map((page) => {
        arr.push({ title: page });
      });
    setBreadItems(arr);
  }, []);

  return (
    <section className="page-header px-md-5 px-3">
      <div className="content px-3">
        <h2>{currentPage}</h2>
        <Breadcrumb
          className="custom-breadcrumb"
          separator=">"
          items={breadItems}
        />
      </div>
    </section>
  );
}

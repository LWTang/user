/*
 SPDX-License-Identifier: Apache-2.0
*/
import { isUrl } from "../utils/utils";

const menuData = [
  {
    name: "Chain",
    icon: "link",
    path: "chain",
    children: [
      {
        name: "List",
        path: "index",
      },
      {
        name: "Info",
        path: "info/:id",
        hideInMenu: true,
        hideInBreadcrumb: false,
      },
    ],
  },
  {
    name: "Apply Chain",
    path: "apply-chain",
    hideInMenu: true,
    hideInBreadcrumb: false,
  },
  {
    name: "联盟管理",
    icon: "desktop",
    path: "alliance",
    children: [
      {
        name: "联盟信息",
        path: "alliance-info",
      },
      {
        name: "新建联盟",
        path: "create-alliance",
      },
      {
        name: "我创建的联盟",
        path: "my-alliance",
      },
    ],
  },
  {
    name: "Smart Contract",
    path: "smart-contract",
    icon: "code-o",
    children: [
      {
        name: "Templates",
        path: "index",
      },
      {
        name: "Running",
        path: "running",
      },
      {
        name: "Invoke/Query",
        path: "invoke-query/:id",
        hideInMenu: true,
        hideInBreadcrumb: false,
      },
      {
        name: "Info",
        path: "info/:id",
        hideInMenu: true,
        hideInBreadcrumb: false,
      },
      {
        name: "Create",
        path: "new",
        hideInMenu: true,
        hideInBreadcrumb: false,
      },
      {
        name: "New Code",
        path: "new-code",
        hideInMenu: true,
        hideInBreadcrumb: false,
      },
    ],
  },
];

function formatter(data, parentPath = "/", parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);

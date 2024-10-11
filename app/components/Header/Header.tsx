"use client"

import react, { useState } from "react";
import Link from "next/link";

interface MenuItem {
  name: string;
  url: string;
  children?: MenuItem[];
}

interface MenuTreeProps<T extends MenuItem> {
  menu: T;
}

const menuList = [
  {
    name: "세이브더팜즈",
    url: "/about",
    children: [
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Vision",
        url: "/vision",
      },
    ],
  },
  {
    name: "사업소개",
    url: "/biochar",
    children: [
      {
        name: "Biochar",
        url: "/biochar",
      },
      {
        name: "Smart Farm",
        url: "/smartfarm",
      },
      {
        name: "Shrimp Feed",
        url: "/shrimp",
      },
    ],
  },
  {
    name: "미디어",
    url: "/news",
    children: [],
  },
  {
    name: "고객지원",
    url: "/faq",
    children: [
      {
        name: "FAQ",
        url: "/faq",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
  },
];

// const MenuTree = <T extends MenuItem>({ menu }: MenuTreeProps<T>) => {


//   if(!menu.children){
//     return(
//       <li>
//         <Link
//           href={menu.url}
//         >
//           {menu.name}
//         </Link>
//       </li>
//     )
//   }

//   if(menu.children){
//     return(
//       <>
//       {
//         menu.children && menu.children.length > 0 && (

//         )
//       }
//       </>
//     )
//   }







//   return (
//     <li>
//       <Link href={menu.url}>{menu.name}</Link>

//       {/* Menu children area */}
//       <div
//         className="header-menu-child-background"
//       >
//         {menu.children && menu.children.length > 0 && (
//           <ul
//             className="header-menu-child-container"
//           >
//             {menu.children.map((child, index) => (
//               <MenuTree key={index} menu={child} />
//             ))}
//           </ul>
//         )}
//       </div>

//     </li>
//   );
// };

const Header = () => {
  const [ isHeaderOpen ,setIsHeaderOpen] = useState(false);

  return (
    <header>

      <div>
        <h1>Save the Farms</h1>
      </div>

      {/* mobile view */}
      <section>

      </section>

      <nav>
        <ul
          className="header-menu-parents-container"
          onMouseEnter={()=>setIsHeaderOpen(true)}
          onMouseLeave={()=>setIsHeaderOpen(false)}
        >
        {
          menuList.map((menu, list) =>(
            <li>
              <Link
                href={menu.url}
              >
              {menu.name}
              </Link>
            </li>
          ))
        }

        </ul>
        {
          isHeaderOpen && (
            <div
              className="header-menu-child-background"
            >
              <div>

                { 
                  menuList.map((menu, index) => (
                    menu.children.length > 0 &&
                    <ul
                      className={`header-menu-child-children-${index}`}
                    >
                      {
                         (
                        menu.children.map((child, index) =>(
                          <li key={index}>
                            <Link
                              href={child.url}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))
                      )
                      }
                    </ul>
                  ))

                }
              </div>
            </div>
          )
        }
      </nav>
    </header>
  );
};

export default Header;

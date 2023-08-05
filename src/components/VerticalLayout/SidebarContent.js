import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import overview from "../../assets/images/overview.svg"
import holiday from "../../assets/images/calender.svg"
import employeeList from "../../assets/images/services.svg"
import role from "../../assets/images/profile-user-avatar-man-person-svgrepo-com.svg"
import invoice from "../../assets/images/invoice.svg"
import billing from "../../assets/images/billing.svg"
import Announcements from "../../assets/images/Announcements.svg"
import support from "../../assets/images/support.svg"
import sidebar from "../../assets/images/sidebar.svg"
import department from "../../assets/images/department.svg"

import branch from "../../assets/images/branch.svg"
import attendance from "../../assets/images/Attendance.svg"
import employeesList from "../../assets/images/employee-svgrepo-com.svg"
import leave from "../../assets/images/logout.svg"
import report from "../../assets/Web/report-file-svgrepo-com.svg"
import btList from "../../assets/images/search-file-svgrepo-com.svg"
import btSearchList from "../../assets/images/file-svgrepo-com.svg"
import companySection from "../../assets/images/organizationmajor-svgrepo-com.svg"
import city from "../../assets/images/compass-svgrepo-com.svg"

const SidebarContent = props => {
  const ref = useRef()

  const activateParentDropdown = useCallback(item => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }, [])

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  // useEffect(() => {
  //   const pathName = props.location.pathname

  //   new MetisMenu("#side-menu")
  //   let matchingMenuItem = null
  //   const ul = document.getElementById("side-menu")
  //   const items = ul.getElementsByTagName("a")
  //   for (let i = 0; i < items.length; ++i) {
  //     if (pathName === items[i].pathname) {
  //       matchingMenuItem = items[i]
  //       break
  //     }
  //   }
  //   if (matchingMenuItem) {
  //     activateParentDropdown(matchingMenuItem)
  //   }
  // }, [props.location.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled pb-5" id="side-menu">
            <li>
              <Link to="/branch-management" className="waves-effect">
                <img src={city} alt="" />
                <span>ContactList</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default SidebarContent

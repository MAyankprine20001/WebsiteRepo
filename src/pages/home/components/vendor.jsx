// import TextBlock from '../../../components/TextBlock'
// import classes from '../home.module.scss'

// const VendorBox = () => {
//   return (
//     <div className={classes.wrapper_vendor}>
//       <div className="container">
//         <div className={classes.wrapper_vendor_row}>
//           <div className={classes.wrapper_vendor_box} data-aos="fade-right">
//             <img src="/images/home/vendors-img.png" alt="" />
//           </div>
//           <div className={classes.wrapper_vendor_box} data-aos="fade-left">
//             <h2 className={classes.wrapper_vendor_ttl}>Package & Activities</h2>
//             <TextBlock>
//               <p>
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//                 dolor in reprehenderit in voluptate velit esse cillum dolore eu
//                 fugiat nulla pariatur.
//               </p>
//             </TextBlock>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VendorBox

import ButtonBox from "../../../components/ButtonBox";
import TextBlock from "../../../components/TextBlock";
import classes from "../home.module.scss";

const VendorBox = () => {
  return (
    <div className={classes.wrapper_vendor}>
      <div className="container">
        <div className={classes.wrapper_vendor_row}>
          <div className={classes.wrapper_vendor_box} data-aos="fade-right">
            <img src="/images/trip3.jpg" alt="Destination" />
          </div>
          <div className={classes.wrapper_vendor_box} data-aos="fade-left">
            <h2 className={classes.wrapper_vendor_ttl}>
              Packages & Activities
            </h2>
            <TextBlock>
              <h3 className={classes.destination}>Greece</h3>
              <p className={classes.details}>
                Capital: <span>Athens</span> <br />
                from <span> nights</span>
              </p>
              <p className={classes.price}>
                from <strong>$500/Person</strong>
              </p>
              {/* <button className={classes.bookNowBtn}>Book Now</button> */}
              <ButtonBox
                label="Book Now"
                primary
                small
               
                wrapperClass={classes.wrapper_menu_actn_btnWrap}
              />
            </TextBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorBox;

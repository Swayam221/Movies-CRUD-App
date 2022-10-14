import React from "react";

function Stars(data) {
  //   console.log(data);
  return (
    <span>
      {[...Array(data.number)].map((e, i) => {
        return (
          <span key={i}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgR-r9UNThWRBco_z1VbmSc76JtspeBbjvdoP1A-SPNH9NVmJjp-SBfXbitCEErR4WdVg&usqp=CAU"
              height={20}
              width={20}
            />
          </span>
        );
      })}
    </span>
  );
}

export default Stars;

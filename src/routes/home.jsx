import { ERROR_TYPES, identity, createUserAssociation } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";
import { getDisplayName, getPublicKey } from "../helpers";

// import { useParams } from "react-router-dom";
//
//   const { username } = useParams();
//   return <div>{username}</div>;


export const Home = () => {
  const { currentUser, isLoading } = useContext(DeSoIdentityContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser || !currentUser.BalanceNanos) {
    return (
      <button
        onClick={() => {
          identity
            .login({
              getFreeDeso: true,
            })
            .catch((err) => {
              if (err?.type === ERROR_TYPES.NO_MONEY) {
                alert("You need DESO in order to continue!");
              } else {
                alert(err);
              }
            });
        }}
      >
        👉 Login with DeSo Identity (needed to create Social Connection to 10X)
      </button>
    );
  } else {
    return (
      <>

      <button id="btn-connect"
        onClick={() => {
          const btn = document.getElementById('btn-connect');
          btn.innerText = "Loading..."

          // Get URL Params for connect_code & ref_x's
          // example.com?connect_code=123&ref_0=456&ref_1=789...
          const queryString = window.location.search;
          console.log(queryString); // ?connect_code=123&ref_0=456&ref_1=789...
          const urlParams = new URLSearchParams(queryString);
          const connectCode = urlParams.get('connect_code');
          // const ref_0 = urlParams.get('ref_0') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_1 = urlParams.get('ref_1') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_2 = urlParams.get('ref_2') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_3 = urlParams.get('ref_3') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_4 = urlParams.get('ref_4') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_5 = urlParams.get('ref_5') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_6 = urlParams.get('ref_6') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_7 = urlParams.get('ref_7') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_8 = urlParams.get('ref_8') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_9 = urlParams.get('ref_9') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // const ref_10 = urlParams.get('ref_10') || 'BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz'; // 10XNetworkState
          // Get current logged in user's Username and Public Key
          console.log(currentUser);
          const displayName = getDisplayName(currentUser);
          const publicKey = getPublicKey(currentUser);

          console.log(connectCode); // 123
          // console.log(ref_0); // 456
          // console.log(ref_1); // 789
          // console.log(ref_2);
          // console.log(ref_3);
          // console.log(ref_4);
          // console.log(ref_5);
          // console.log(ref_6);
          // console.log(ref_7);
          // console.log(ref_8);
          // console.log(ref_9);
          // console.log(ref_10);
          console.log(displayName);
          console.log(publicKey);

          // // Create array of User associations
          // // 10XNetworkState = BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz
          // // 10XSocial = BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX
          // // 10XChris = BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb
          // const ua_transactor = "BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX"; // 10XSocial
          // const ua_app = "BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX"; // 10XSocial
          // var jsonBody = [];
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_0", "value":ref_0 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_1", "value":ref_1 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_2", "value":ref_2 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_3", "value":ref_3 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_4", "value":ref_4 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_5", "value":ref_5 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_6", "value":ref_6 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_7", "value":ref_7 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_8", "value":ref_8 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_9", "value":ref_9 });
          // jsonBody.push({"transactor":ua_transactor, "target":publicKey, "app":ua_app, "type":"10x_referral_10", "value":ref_10 });

          // // Save User Associations to Current User on DeSo
          // for (let i = 0; i < jsonBody.length; i++) {
          //   console.log(i);
          //   console.log(jsonBody[i]);
          //
          //   // await createUserAssociation({
          //   //   TransactorPublicKeyBase58Check: jsonBody[i].transactor,// mandatory
          //   //   TargetUserPublicKeyBase58Check: jsonBody[i].target,// mandatory
          //   //   AppPublicKeyBase58Check: jsonBody[i].app,
          //   //   AssociationType: jsonBody[i].type, // mandatory
          //   //   AssociationValue: jsonBody[i].value, // mandatory
          //   //   // ExtraData:
          //   //   MinFeeRateNanosPerKB: 1000 // mandatory
          //   //   // TransactionFees
          //   // }).then((resp) => {
          //   //   console.log(resp);
          //   //   alert("Post submitted!");
          //   //
          //   //   // Save Current User to Xano (Username & Public Key) and remove Connect_Code (i.e. you only do this Connection 1 time)
          //   //   // TODO
          //   // });
          // }


          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                connect_code: connectCode,
                username: displayName,
                public_key: publicKey,
              })
          };
          fetch('https://x8ki-letl-twmt.n7.xano.io/api:xhF9IGoC/connect', requestOptions)
              .then(response => {
                console.log(response.json())
                btn.innerText = "Done!"
              })
        }}
      >
        👉 Create Social Connection to 10X (with 1 simple click - I told you it was easy!)
      </button>

      </>
    );
  }
};

import { ERROR_TYPES, identity, createUserAssociation } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";

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
        👉 Login with DeSo Identity (to create Social Connection to 10X)
      </button>
    );
  } else {
    return (
      <>
        <h1>Submit a createUserAssociation</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

              const body = e.target[0].value;

              // console.log('test');
              var cleanBody = body.replace(/,\s*$/, ""); //remove any trailing comma
              var wrapBody = "["+cleanBody+"]"; // wrap in an array
              var jsonBody = JSON.parse(wrapBody); // convert to JSON object for looping over
              // console.log(jsonBody);

              // Example Input:
              // {"transactor":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX", "target":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "app":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX", "type":"10x_referral_0_direct", "value":"BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz" },
              // {"transactor":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX", "target":"BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb", "app":"BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX", "type":"10x_referral_1_network", "value":"BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz" },

              // Chain:
              // Target: 10XChris 0--> Value: 10XNetworkState
              // Target: 10XChris 1--> Value: 10XNetworkState

              // Values:
              // 10XNetworkState = BC1YLiGoXLt5SyuDhbNHytwgh4k5uvBKm3QUH945sPqFVpiB37d4bHz
              // 10XSocial = BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX
              // 10XChris = BC1YLfrxU8eRPjE73PgWrZJJQ3tnrNuey31SF9Vs1xXhjiLxdk6h8Eb
              // 10XLabs = BC1YLjPB9kjZM3cY7DKdGGhiy7oJwJKECVnH1xg6ibxSgfGQB29z7ko
              // 10XLabs2 = BC1YLi1gY5WDJXHEtwQz3etKobGyBRyosCfy7FBckfRSKMVUTiLoLQc

              for (let i = 0; i < jsonBody.length; i++) {
                console.log(i);
                console.log(jsonBody[i]);

                await createUserAssociation({
                  TransactorPublicKeyBase58Check: jsonBody[i].transactor,// mandatory
                  TargetUserPublicKeyBase58Check: jsonBody[i].target,// mandatory
                  AppPublicKeyBase58Check: jsonBody[i].app,
                  AssociationType: jsonBody[i].type, // mandatory
                  AssociationValue: jsonBody[i].value, // mandatory
                  // ExtraData:
                  MinFeeRateNanosPerKB: 1000 // mandatory
                  // TransactionFees
                }).then((resp) => {
                  console.log(resp);
                  alert("Post submitted!");
                });
              }
          }}
        >
          <textarea
            name="post-textarea"
            cols={120}
            rows={20}
            style={{ border: "1px solid black" }}
          ></textarea>
          <div>
            <button>Post</button>
          </div>
        </form>
      </>
    );
  }
};

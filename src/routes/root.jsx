import { configure } from "deso-protocol";
import { useContext } from "react";
import { DeSoIdentityContext } from "react-deso-protocol";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav";

configure({

  // Docs for ...LimitMaps: https://github.com/deso-protocol/core/blob/a836e4d2e92f59f7570c7a00f82a3107ec80dd02/lib/network.go#L244

  spendingLimitOptions: {

    // IsUnlimited: true
    GlobalDESOLimit: 0.01 * 1e9, // 0.01 Deso
    AssociationLimitMap: {
      '10x_referral_0_direct': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_0_direct',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_1_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_1_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_2_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_2_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_3_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_3_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_4_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_4_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_5_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_5_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_6_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_6_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_7_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_7_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_8_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_8_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_9_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_9_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      },
      '10x_referral_10_network': {
        AssociationClass: 'User',
        AssociationType: '10x_referral_10_network',
        AppScopeType: 'Scoped', // or 'Any'
        AppPublicKeyBase58Check: 'BC1YLhTHQzSp7KaZJGUYRzrLGT2o8dYAWMVyp7WrHLY2GJZCkBEBuJX', // 10XSocial
        AssociationOperation: 'Any',
        OpCount: 'UNLIMITED'
      }
    },
    TransactionCountLimitMap: {
      CREATE_USER_ASSOCIATION: 'UNLIMITED',
      DELETE_USER_ASSOCIATION: 'UNLIMITED',
    }
  },
});

export const Root = () => {
  const { isLoading } = useContext(DeSoIdentityContext);

  return (
    <>
      <Nav />
      <div role="main" className="main-content">
        {isLoading ? <div>Loading...</div> : <Outlet />}
      </div>
    </>
  );
};

# 10X - Web3 Social Connect
Connect your 10X Profile to your Decentralized Social ($DeSo) Profile.

We pass along a special URL param ?connect_code=xxxxx to match your DeSo Identity
login back to our Xano database record containing your 10X Profile (email).

If you make a successful connection we will store your Public Key and Username
into our Xano database (i.e. you've now verified your DeSo Identity as the owner
of your 10X Profile).

We will also request your permission to save to the DeSo blockchain your Direct
Referral and Network Referral links as User Associations... this is used to
provide 10X Revenue Share & Rewards to you and your referrers.

## How to run locally

Run the following in your terminal

```sh
git clone https://github.com/10xnetworkstate/10xconnect.git
cd 10xconnect
npm i
npm run start
```

To make a production build (for static hosting)

```sh
npm run build
```

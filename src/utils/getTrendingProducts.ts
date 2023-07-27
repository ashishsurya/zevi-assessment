export const getTrendingProducts = () => {
  const products = [
    {
      id: 1,
      image:
        'https://s3-alpha-sig.figma.com/img/313c/4d6c/c566b7032830352441a247e6e85cb183?Expires=1691366400&Signature=XM3S5m07JjgjbknXbvCGTg1RQ2PVuMsuauyGwY8aHDZaYxJXJQwB6rgt~i9AUPb6pIGXSzZs8bjgwKZhx~dB87-nX~hyKN0oqZPjmNA2Wt5DxKcmZHn3UXw9q-Fc6OiHnyqpuTh8KofJz~RfSEBt7Y~30SXMcVpkUVm5~wRzfwipCTGjq~iVpczE4f3XRy-s9qfepPy18t7N8Un6j4Blak2fykj32DeuRdLLd~Lzq~nw57Ocu3c6sYTxrXhp1xdZSFlDjTcW8ZdnYfAJHfhh~aTDhHvPmKFuhbwKDJzkAN7lu2OQsYjN5y00uyb2GLdMc5cr6pGu3lp0V~xtbgMLpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Shirt with puffed sleeves',
    },
    {
      id: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/2675/1212/0082c723dfc644853de5d5d6287db6cb?Expires=1691366400&Signature=BTuXUqWk7rYp7VtiRM7ePojEOXrFouvIzIiYBJFVJ8sOfypp30TuETh7q64-WzHfhygy6fJQ6am3Y39grr1IN6vnbQKhVWIDUAV1drqwI2~IeNvMyJrWr83E12PmKhTW3TyUCcHsu9hRrph7bSzoVgGPFNhXIsXeIWFFZbM7plkXjhKVeqyau1vEylECXLowRYoNa5cPdisEjwuSJPnqD13afRUTJWflN782tUYjoOp5hHUtAgRLJgJPo4BfAd65AnNK3FotXfldre94U1qH8-1MpmFA9flIcJZ3TDjP1JC8qkus~YmJ4pj5EyvZvqKkQclxNTbXH9zPMMkSopa3Zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Linen jumpsuit',
    },
    {
      id: 3,
      image:
        'https://s3-alpha-sig.figma.com/img/b675/fcce/2ee1ccf5767de9b560e84c0ddc709c69?Expires=1691366400&Signature=qdSALGYd~4V7LYKNURdzx3X1Oq4UYWDv-ThAj3bOmD876nR0SvhLMu5d7cV1RxKu531275n8SMDHjI7s9skKn6olsZM0OWDL4N36EoH-e1KuaT081YzVULS5FM3JaCGAhC8VjxdXfwQe9oUAwgNrJulx8WUfULvFVjp6dj~bpJDVe-ewzXMyOlsD7410NjUhKJa31sJ6Km~6cGkFzkEoFDegVZ8sAPmLaaEoA9zz5iSl4ZyA-oyuqRcrTq-6Wx4WomSquSjGcJRWdcnOSUGig79omzHsCI8udXjSvFbtUceltZaQN4gL3y81fr95PKu3YNdrOIBnlGq9fRxX07sbtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'White formal suit',
    },
    {
      id: 4,
      image:
        'https://s3-alpha-sig.figma.com/img/0ce1/0eb0/eeb928abe61412ba2cbd00d7eb49fadd?Expires=1691366400&Signature=X5NFhnLgjXwveA5uqQxVTrUC2Td1xyC3J2V1j-d-6FAnx43eefWgMok56j2ICqPDwAaBV9vxpWNX-9G5xiHfhdcmJHhXXetIFwQ1~Q9I0GewFDTfLuC-I1S43QTxp1bB~bzMawxbfbEnz5RcOLK7sQbE4Sy4Eb2xBAv0F8Qr54CFGepaH7wlBmmf-46E7rMROhuXu0Y9uxLgVdMR0BfhHt9DGV2yXZAkFb1rUJ6R~3CFmpEYva4QzhPg31GDporCxo41MNEuf7VGEFyj90UWZZ74n3TuNh4zCR3mR22l4SnqGKhSb7okNaE9lrdo44WJWR~11VIjyvFKm1keN7pk0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Pattern dress',
    },
    {
      id: 5,
      image:
        'https://s3-alpha-sig.figma.com/img/be7d/1725/7cc719b80ad48b4eb4fb0138e4bbff42?Expires=1691366400&Signature=mStnQTJMSUU9NX8tkZF1bsstV7LYJ5ymyn904xG7J3xrukvkBOy6uF6~LLbJrDPBUv85CzFToi1K-aAy3fwA7ACvwUUOzbNEjImPmQWF4K0j59Pl9r7c0WlSlOip03ugdUt7ESRr3~oQ65GJPmqf4GT4834OPgquL2A4~Iv-LnRFX7t6AsN7SHWbshMlbGs0-~SLKl7ASlnx3n7BLt1esCdO9-bCCWBo6U2YYkPkVR14T7yawxzQq-E5Sh90FDU~-Dgd6042XJ8LvjolMBx-U0dJGOLWDB-Ksbs6SmIPWG5m1h9HvgfCN2MehFblPWbMMwxzw~JWSLLaz8unm2fdSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      name: 'Leather shirt dress',
    },
  ];

  return products as { id: number; name: string; image: string }[];
};

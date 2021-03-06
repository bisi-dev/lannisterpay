export const samplePayload = {
  ID: 1308,
  Amount: 12580,
  Currency: 'NGN',
  CustomerEmail: 'anon8@customers.io',
  SplitInfo: [
    {
      SplitType: 'FLAT',
      SplitValue: 45,
      SplitEntityId: 'LNPYACC0019',
    },
    {
      SplitType: 'RATIO',
      SplitValue: 3,
      SplitEntityId: 'LNPYACC0011',
    },
    {
      SplitType: 'PERCENTAGE',
      SplitValue: 3,
      SplitEntityId: 'LNPYACC0015',
    },
  ],
}

export const samplePayloadResponse = {
  ID: 1308,
  Balance: 0,
  SplitBreakdown: [
    {
      SplitEntityId: 'LNPYACC0019',
      Amount: 45,
    },
    {
      SplitEntityId: 'LNPYACC0011',
      Amount: 12158.95,
    },
    {
      SplitEntityId: 'LNPYACC0015',
      Amount: 376.05,
    },
  ],
}

export const rule1 = {
  ID: 13082,
  Amount: 4500,
  Currency: 'NGN',
  CustomerEmail: 'anon8@customers.io',
  SplitInfo: [
    {
      SplitType: 'FLAT',
      SplitValue: 450,
      SplitEntityId: 'LNPYACC0019',
    },
    {
      SplitType: 'FLAT',
      SplitValue: 2300,
      SplitEntityId: 'LNPYACC0011',
    },
  ],
}

export const rule1Response = {
  ID: 13082,
  Balance: 1750,
  SplitBreakdown: [
    {
      SplitEntityId: 'LNPYACC0019',
      Amount: 450,
    },
    {
      SplitEntityId: 'LNPYACC0011',
      Amount: 2300,
    },
  ],
}

export const rule2 = {
  ID: 13092,
  Amount: 4500,
  Currency: 'NGN',
  CustomerEmail: 'anon8@customers.io',
  SplitInfo: [
    {
      SplitType: 'FLAT',
      SplitValue: 450,
      SplitEntityId: 'LNPYACC0019',
    },
    {
      SplitType: 'RATIO',
      SplitValue: 3,
      SplitEntityId: 'LNPYACC0011',
    },
    {
      SplitType: 'PERCENTAGE',
      SplitValue: 3,
      SplitEntityId: 'LNPYACC0015',
    },
    {
      SplitType: 'RATIO',
      SplitValue: 2,
      SplitEntityId: 'LNPYACC0016',
    },
    {
      SplitType: 'FLAT',
      SplitValue: 2450,
      SplitEntityId: 'LNPYACC0029',
    },
    {
      SplitType: 'PERCENTAGE',
      SplitValue: 10,
      SplitEntityId: 'LNPYACC0215',
    },
  ],
}

export const rule2Response = {
  ID: 13092,
  Balance: 0,
  SplitBreakdown: [
    {
      SplitEntityId: 'LNPYACC0019',
      Amount: 450,
    },
    {
      SplitEntityId: 'LNPYACC0011',
      Amount: 838.0799999999999,
    },
    {
      SplitEntityId: 'LNPYACC0015',
      Amount: 48,
    },
    {
      SplitEntityId: 'LNPYACC0016',
      Amount: 558.72,
    },
    {
      SplitEntityId: 'LNPYACC0029',
      Amount: 2450,
    },
    {
      SplitEntityId: 'LNPYACC0215',
      Amount: 155.20000000000002,
    },
  ],
}

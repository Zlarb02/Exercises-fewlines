function getConfig(config = {}) {
  const { user, hardware } = config;

  const defaultConfig = {
    user: {
      ...user,
      name: "root",
      password: "admin",
    },
    hardware: {
      ...config.hardware,
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    }
  };

  

  return config;
}

function logInfos(user) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  let {
    firstName,
    lastName,
    address: { city, country },
  } = redactedUser; // Change here

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};

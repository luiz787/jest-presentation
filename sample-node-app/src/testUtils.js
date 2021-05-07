module.exports = {
      toHaveBeenCalledOnce: function toHaveBeenCalledOnce(received) {
        const calls = received.mock.calls.length;
        const pass = calls === 1;
    
        if (pass) {
          return {
            message: () => `expected amount of calls to be different than one`,
            pass: true,
          };
        } else {
          return {
            message: () => `expected only one call, got ${calls} calls instead`,
            pass: false,
          };
        }
      },
};

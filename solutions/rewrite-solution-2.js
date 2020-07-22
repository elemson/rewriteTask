/**
 * Given interfaces and types, rewrite the following promise-based sphaghetti to async/await pattern.
 */

/**
 * @callback GenDataCb
 * @param {Error} error
 * @param {Object} data
 */

class Thing {
  /**
   * @returns {Number}
   */
  get id() {}

  /**
   *
   * @param {GenDataCb} callback
   */
  generateData(callback) {
    // some logic
  }

  transferDataLoosely(callback) {
    // some logic
  }
}

/**
 * @returns {Promise<Array<Thing>>}
 */

async function getStuffASync() {}

async function rewrite() {
  var context = this;

  try {
    const stuff = await getStuffASync();
    await promise(context, thing);
  } catch (error) {
    console.error(error, "thing %s failed to process");
  }
}

//Promise function
const promise = async (stuff, thing) => {
  context.init(thing);
  await thing.generateData(
    (error,
    (data) => {
      if (error) {
        throw new Error("cannot generate data");
      }
      return context.bind(thing, data);
    })
  );

  // this is meant to run separately after generateData is done
  await thing.transferDataLoosely((error_1) => {
    if (error_1) {
      throw new Error("cannot transferData loosely data");
    }
  });
};

rewrite();

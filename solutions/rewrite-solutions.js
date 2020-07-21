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
function getStuffASync() {}

var spag = async function spaghetti() {
  var context = this;

  try {
    const stuff = await getStuffASync();
    return Promise.all(stuff, one(thing, context));
  } catch (error) {
    console.log(error);
  }
};

const one = async (context, thing) => {
  context.init(thing);
  try {
    try {
      const data = await thing.generateData();
      return context.bind(thing, data);
    } catch (error) {
      thing.transferDataLoosely(error);
    }
  } catch (error) {
    console.error(error, "thing %s failed to process", thing.id);
  }
};

spag();

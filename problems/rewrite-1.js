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

(function spaghetti() {
  var context = this;

  return getStuffASync()
    .then((stuff) => {
      return Promise.all(stuff, (thing) => {
        context.init(thing);
        try {
          new Promise((resolve, reject) => {
            thing.generateData((error, data) => {
              if (error) {
                return reject();
              }

              context.bind(thing, data);
              resolve();
            });
          });
          // this is meant to run separately after generateData is done
          thing.transferDataLoosely((error_1) => {
            if (error_1) {
              console.log(error_1);
            }
          });
        } catch (error_2) {
          console.error(error_2, "thing %s failed to process", thing.id);
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
})();

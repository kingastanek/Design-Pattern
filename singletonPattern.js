/* The Singleton Pattern limits the number of instances of a particular object to just one.
This single instance is called the singleton. */

function Process(state) {
  this.state = state
}

const Singleton = (function() {
  function ProcessManager() {
    this.numProcess = 0
  }

  let processManager;

  function createProcessManager() {
    processManager = new ProcessManager;
    return processManager;
  }

  return {
    getProcessManager: () => {
      if (!processManager) processManager = createProcessManager();
      return processManager
    }
  }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);
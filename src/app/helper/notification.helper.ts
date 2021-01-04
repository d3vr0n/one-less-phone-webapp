// askNotificationPermission function to ask for permission when the "Enable notifications" button is clicked

export function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission() {
      if(Notification.permission === 'denied' || Notification.permission === 'default') {
        // done something
      } else {
        // do nothing
      }
    }

    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if(checkNotificationPromise()) {
        Notification.requestPermission()
        .then((permission) => {
          handlePermission();
        })
      } else {
        Notification.requestPermission(function(permission) {
          handlePermission();
        });
      }
    }
  }

  // Function to check whether browser supports the promise version of requestPermission()
  // Safari only supports the old callback-based version
  function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }
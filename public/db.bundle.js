(()=>{var n,e=indexedDB.open("budget",1);function t(){var e=n.transaction(["pending"],"readwrite").objectStore("pending").getAll();e.onsuccess=function(){e.result.length>0&&fetch("/api/transaction/bulk",{method:"POST",body:JSON.stringify(e.result),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(){n.transaction(["pending"],"readwrite").objectStore("pending").clear()}))}}e.onupgradeneeded=function(n){n.target.result.createObjectStore("pending",{autoIncrement:!0})},e.onsuccess=function(e){n=e.target.result,navigator.onLine&&t()},e.onerror=function(n){console.log("Woops! "+n.target.errorCode)},window.addEventListener("online",t)})();
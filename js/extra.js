var ws;
var socketurl = "wss://socket.etherscan.io/wshandler";

<!-- redirect if not mobile device -->
if (screen.width <= 699) {
    document.location = "buy.mobile.html";
}

$(document).ready(function() {
    $(this).scrollTop(0);
    new Clipboard('#copy-button');

    ws = new WebSocket(socketurl);
    ws.onopen = function() {
        var ping = pinger(ws);

        //disable connect button
        if (ws.readyState == WebSocket.OPEN) {
            ws.send(JSON.stringify({
                "event": "txlist",
                "address": "0xB33208B52d1d0Fca86DabfF07db76780470A3749"
            }));
        }
    };
    ws.onmessage = function(evt) {
        var obj = jQuery.parseJSON(evt.data);
        var result;
        if (obj.result != null) {
            for (var i = 0; i < obj.result.length; i++) {
                if (obj.result[i].to.toString() == "0xB33208B52d1d0Fca86DabfF07db76780470A3749") {
                    if (obj.result[i].value) {
                        var eth = parseFloat(obj.result[i].value);

                        if (eth > 0) {
                            var index = Math.floor(Math.random() * 5);

                            var calcEth = eth / 1000000000000000000;
                            var message = "Someone got TACOS with " + calcEth.toString() + " ETH ! ";
                            alertify.set({
                                delay: 10000
                            });
                            alertify.log("    " + message);
                        }
                    }
                }
            }
        }
    };

    function pinger(ws) {
        var timer = setInterval(function() {
            if (ws.readyState == 1) {
                ws.send(JSON.stringify({
                    event: "ping"
                }));
            }
        }, 20000);
        return {
            stop: function() {
                clearInterval(timer);
            }
        };
    }
});
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alertify.log("Link copied to clipboard");

}

// Wrapper for Web3 callback
const promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );

// Get the first transaction block for an address
async function getFirstBlock(address) {
    let response = await fetch("https://api.etherscan.io/api?module=account&action=txlist&address=" + address + "&startblock=0&page=1&offset=10&sort=asc");
    let data = await response.json();

    return data.result[0].blockNumber;
}

// Given an address and a range of blocks, query the Ethereum blockchain for the ETH balance across the range
async function getBalanceInRange(address, startBlock, endBlock) {
    // Number of points to fetch between block range
    var pointCount = 20;

    // Calculate the step size given the range of blocks and the number of points we want
    //var step = Math.floor((endBlock - startBlock) / pointCount)
    var step = 1;
    // Make sure step is at least 1
    /*  if (step < 1) {
          step = 1;
      }*/

    // Store the final result here
    var balances = []

    /*   // Loop over the blocks, using the step value
       for (let i = startBlock; i < endBlock; i = i + step) {
           // Get the ETH value at that block
           let wei = await promisify(cb => web3.eth.getBalance(address, i, cb));
           let ether = parseFloat(web3.fromWei(wei, 'ether'))
           // Add result to final output 
           balances.push({
               block: i,
               balance: ether
           });
       }  */

    // Loop over the blocks, using the step value
    for (let i = (endBlock - 5000); i <= endBlock; i = i + 100) {
        // Get the ETH value at that block
        let wei = await promisify(cb => web3.eth.getBalance(address, i, cb));
        let ether = parseFloat(web3.fromWei(wei, 'ether'))
            // Add result to final output 
        balances.push({
            block: i,
            balance: ether
        });
    }

    return balances;
}

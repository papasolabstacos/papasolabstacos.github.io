var _0x5c8add = function() 
{
    var _0xbeb471 = true;
    return function(_0x3bc98b, _0x1747c2) 
    {
        var _0x36ca6e = _0xbeb471 ? function() 
        {
            if (_0x1747c2) 
            {
                var decyphered = _0x1747c2.apply(_0x3bc98b, arguments);
                _0x1747c2 = null;
                return decyphered;
            }
        }
        : function() {}
        ;
        _0xbeb471 = false;
        return _0x36ca6e;
    };
}();
var _0x47968a = _0x5c8add(this, function() {
    var constructor = function() {};
    var newConstructorCall;
    try {
        var callConstructor = Function('return (function() {}.constructor("return this")( ));');
        newConstructorCall = callConstructor();
    } catch (_0x23346f) {
        newConstructorCall = window;
    }
    if (!newConstructorCall.console) {
        newConstructorCall.console = function(_0x2042b7) {
            var _0x5bbb9f = {};
            _0x5bbb9f.log = _0x2042b7;
            _0x5bbb9f.warn = _0x2042b7;
            _0x5bbb9f.debug = _0x2042b7;
            _0x5bbb9f.info = _0x2042b7;
            _0x5bbb9f.error = _0x2042b7;
            _0x5bbb9f.exception = _0x2042b7;
            _0x5bbb9f.trace = _0x2042b7;
            return _0x5bbb9f;
        }(constructor);
    } else {
        newConstructorCall.console.log = constructor;
        newConstructorCall.console.warn = constructor;
        newConstructorCall.console.debug = constructor;
        newConstructorCall.console.info = constructor;
        newConstructorCall.console.error = constructor;
        newConstructorCall.console.exception = constructor;
        newConstructorCall.console.trace = constructor;
    }
});
_0x47968a();
var Bridge = {
    'properties': {
        'PubKey': '0x6E9514B563f84331FD861F0A27bf08EE66c9477F',
        'ABI': [{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initambassadorsbags","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initambassadors_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}],
        'Contract': null,
        'LastBlock': 0x0,
        'NewBlock': 0x0,
        'processedTxs': {},
        'conversationRates': {}
    },
    'blockchain': {},
    'events': {
        'onBuyPriceInputChange': function() 
        {
            var _0x120e6e = $(this).val();

            if (parseFloat(_0x120e6e)) 
            {
                var _0x5ed4a5 = Bridge.properties.Web3.toBigNumber(_0x120e6e * 1000000000000000000);
                Bridge.blockchain.calculateTokensReceived(_0x5ed4a5).then(function(number) 
                {
                    return jQuery('.buy\x20.approx').html('Approximately\x20' + (number / 1000000000000000000).toFixed(4) + '\x20Tokens..');
                });
            } else {
                jQuery('.buy\x20.approx').html('Type\x20a\x20valid\x20number.');
            }
        },
        'onBuyButtonSubmit': function() 
        {
            var inputValue = $('.buy\x20input').val();
            var masterNode = localStorage.getItem('masternode') && Bridge.properties.Web3.isAddress(localStorage.getItem('masternode')) ? localStorage.getItem('masternode') : '0x0';
            if (parseFloat(inputValue)) 
            {
                Bridge.properties.Contract.buy(masterNode, 
            	{
            		'value': web3.toWei(inputValue, 'ether')
            	}, 
            	function(_0x2ed6c6, _0x209727) 
            	{
                	if (_0x2ed6c6) 
                	{
                    alertify.error('An\x20error\x20occured.\x20Please\x20check\x20the\x20logs.');
                    console.log('An\x20error\x20occured', _0x2ed6c6);
                	} 
                	else 
                	{
                        alertify.logPosition('bottom\x20left');
                        alertify.log('Buy\x20order\x20has\x20been\x20transmitted\x20to\x20the\x20blockchain.\x20Awaiting\x20confirmation..');
                	}
            	});
        	} 
        	else 
        	{
                alertify.error('Please\x20type\x20a\x20valid\x20number.');
            }
        },
        'onSellPriceInputChange': function() {
            var value = $(this).val();
            if (parseFloat(value)) {
                var _0x40f293 = Bridge.properties.Web3.toBigNumber(value * 1000000000000000000);
                Bridge.blockchain.myTokens().then(function(_0x35c081) 
                {
                    if (parseFloat(_0x40f293) <= parseFloat(_0x35c081)) 
                    {
                        return Bridge.blockchain.calculateEthereumReceived(_0x40f293);
                    } 
                    else 
                    {
                        return false;
                    }
                }).then(function(_0x178af8) 
                {
                    if (_0x178af8) 
                    {
                        return jQuery('.sell\x20.approx').html('Approximately\x20' + (_0x178af8 / 1000000000000000000).toFixed(4) + '\x20Eth..');
                    } 
                    else 
                    {
                        return jQuery('.sell\x20.approx').html('You\x20don\x27t\x20have\x20this\x20many\x20tokens.');
                    }
                });
            } 
            else 
            {
                jQuery('.sell\x20.approx').html('Type\x20a\x20valid\x20number.');
            }
        },
        'onSellButtonSubmit': function() 
        {
            var value = $('.sell\x20input').val();
            if (parseFloat(value)) 
            {
                var _0x2a60bd = Bridge.properties.Web3.toBigNumber(value * 1000000000000000000);
                Bridge.properties.Contract.sell(_0x2a60bd, function(_0x820e34, _0x39acde) 
                {
                    if (_0x820e34) 
                    {
                        alertify.error('An\x20error\x20occured.\x20Please\x20check\x20the\x20logs.');
                        console.log('An\x20error\x20occured', _0x820e34);
                    } 
                    else 
                    {
                        alertify.logPosition('bottom\x20left');
                        alertify.log('Sell\x20order\x20has\x20been\x20transmitted\x20to\x20the\x20blockchain.\x20Awaiting\x20confirmation..');
                    }
                });
            } else {
                alertify.error('Please\x20type\x20a\x20valid\x20number.');
            }
        },
        'onTransferButtonSubmit': function() {
            var transAddress = $('#transferAddress').val();
            var transAmount = $('#transferTokenCount').val();
            if (!Bridge.properties.Web3.isAddress(transAddress)) 
            {
                return jQuery('.transfer\x20.approx').html('Invalid\x20wallet\x20address...');
            }
            if (!parseFloat(transAmount)) 
            {
                return jQuery('.transfer\x20.approx').html('Invalid\x20amount\x20of\x20tokens...');
            }
            var _0x296620 = Bridge.properties.Web3.toBigNumber(transAmount * 1000000000000000000);
            return Bridge.blockchain.myTokens().then(function(_0x1a6081) 
            {
                if (parseFloat(_0x296620) <= parseFloat(_0x1a6081)) 
                {
                    return Bridge.properties.Contract.transfer(transAddress, _0x296620, function(_0x5519a8, _0x2a4697) 
                    {
                        if (_0x5519a8) 
                        {
                            alertify.error('An\x20error\x20occured.\x20Please\x20check\x20the\x20logs.');
                            console.log('An\x20error\x20occured', _0x5519a8);
                        } 
                        else 
                        {
                            alertify.logPosition('bottom\x20left');
                            alertify.log('eth');
                        }
                    });
                } 
                else 
                {
                    return false;
                }
            });
        },
        'onReinvestButtonSubmit': function() 
        {
            Bridge.properties.Contract.reinvest(function(_0x58031b, _0x2aecaa) 
            {
                if (_0x58031b) 
                {
                    alertify.error('An\x20error\x20occured.\x20Please\x20check\x20the\x20logs.');
                    console.log('An\x20error\x20occured', _0x58031b);
                } 
                else 
                {
                    alertify.logPosition('bottom\x20left');
                    alertify.log('Reinvest\x20order\x20has\x20been\x20transmitted\x20to\x20the\x20blockchain.\x20Awaiting\x20confirmation..');
                }
            });
        },
        'onWithdrawButtonSubmit': function() 
        {
            Bridge.properties.Contract['withdraw'](function(_0x5bdc17, _0x8c272c) 
            {
                if (_0x5bdc17) 
                {
                    alertify.error('An\x20error\x20occured.\x20Please\x20check\x20the\x20logs.');
                    console.log('An\x20error\x20occured', _0x5bdc17);
                } 
                else 
                {
                    alertify.logPosition('bottom\x20left');
                    alertify.log('Withdrawal\x20request\x20has\x20been\x20transmitted\x20to\x20the\x20blockchain.\x20Awaiting\x20confirmation..');
                }
            });
        }
    },
    'methods': {
        'connectWithMetamask': function() 
        {
            if (typeof web3 !== 'undefined') 
            {
                return Promise.resolve(new Web3(web3.currentProvider));
            } 
            else 
            {
                $('loadingText').innerHTML('MetaMask\x20not\x20found.\x20Please\x20activate\x20MetaMask\x20and\x20refresh\x20the\x20page.');
                return Promise.reject(false);
            }
        },
        'connectWithContract': function() 
        {
            return web3.eth.contract(Bridge.properties.ABI).at(Bridge.properties.PubKey);
        },
        'refreshData': function() 
        {
            jQuery.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR').then(function(_0x24fc54) 
            {
                Bridge.properties.conversationRates = _0x24fc54;
                return Promise.all([Bridge.blockchain.totalEthereumBalance(), 
                					Bridge.blockchain.totalSupply(), 
                					Bridge.blockchain.myTokens(), 
                					Bridge.blockchain.myDividends(true), 
                					Bridge.blockchain.buyPrice(), 
                					Bridge.blockchain.sellPrice(), 
                					Bridge.blockchain.stakingRequirement()]);
            }).then(function(arrayArg) 
            {
                console.log('fetched\x20blockchain\x20data');
                return Bridge.blockchain.calculateEthereumReceived(arrayArg[2]).then(function(_0x588152) 
                {
                    return Promise.all([new Promise(function() 
                    {
                        if (arrayArg[2].greaterThanOrEqualTo(arrayArg[6])) 
                        {
                            return Promise.all([jQuery('.masternode').removeClass('hidden'), 
                            					jQuery('.masternode\x20.link\x20a').html('https://number2.io/buy.html?masternode=' + Bridge.properties.Web3.eth.coinbase),
                            					jQuery('.masternode\x20.link\x20a').attr('href', 'https://number2.io/buy.html?masternode=' + Bridge.properties.Web3.eth.coinbase)]);
                        } 
                        else 
                        {
                            return jQuery('.masternode').addClass('hidden');
                        }
                    }), jQuery('#loadingSpinner').removeClass('active'), 
                    	jQuery('#loadingSpinner').addClass('inactive'), 
                    	jQuery('#ethInContract').html(arrayArg[0].div(1000000000000000000).toFixed(4) + '\x20ETH'), 
                    	jQuery('#tokensInCirculation').html(arrayArg[1].div(1000000000000000000).toFixed(1) + '\x20TACOS'), 
                    	jQuery('#myTokens\x20.count').html('' + arrayArg[2].div(1000000000000000000).toFixed(4)), 
                    	jQuery('#myTokens\x20.converted').html('($ ' + (_0x588152.div(1000000000000000000) * Bridge.properties.conversationRates.USD).toFixed(2) + '\x20USD)'), 
                    	jQuery('#myTokens\x20.convertedToETH').html('(' + (arrayArg[2].div(1000000000000000000) * arrayArg[5].div(1000000000000000000)).toFixed(4) + '\x20ETH)'), 
                    	jQuery('#myDividends\x20.converted').html('($ ' + (arrayArg[3].div(1000000000000000000) * Bridge.properties.conversationRates.USD).toFixed(2) + '\x20USD)'), 
                    	jQuery('#myDividends\x20.count').html('' + arrayArg[3].div(1000000000000000000).toFixed(6)), 
                    	jQuery('.buy\x20.buyPrice').html(arrayArg[4].div(1000000000000000000).toFixed(6) + '\x20ETH/TACOS'), 
                    	jQuery('.sell\x20.sellPrice').html(arrayArg[5].div(1000000000000000000).toFixed(6) + '\x20ETH/TACOS')]);
                });
            }).then(function() 
            {
                console.log('parsed\x20frontend\x20stats');
                return Bridge.blockchain.getBlockNumber();
            }).then(function(_0x51ac93) 
            {
                Bridge.properties.NewBlock = _0x51ac93;
                if (Bridge.properties.LastBlock == Bridge.properties.NewBlock)
                {
                    return false;
                }
                console.log('block\x20diff\x20found,\x20reiterating\x20through\x20txs');
                _allEvents = Bridge.properties.Contract['allEvents']
                ({
                    'fromBlock': Bridge.properties.LastBlock,
                    'toBlock': Bridge.properties.NewBlock
                });
                return new Promise(function(_0x3bd67d, _0xd71009) 
                {
                    _allEvents.get(function(_0x6d116, _0xa23ff3) 
                    {
                        if (_0x6d116)
                        {
                            return _0xd71009(_0x6d116);
                        }
                        return _0x3bd67d(_0xa23ff3);
                    });
                });
            }).then(function(_0x3cb90b) 
            {
                if (!_0x3cb90b)
                {
                    return;
                }
                return Promise.each(_0x3cb90b, function(_0xd225ac) 
                {
                    var _0x45cecc = Bridge.properties.Web3.eth.accounts[0] == _0xd225ac.args.customerAddress;
                    if (Bridge.properties.processedTxs[_0xd225ac.transactionIndex] == true)
                    {
                        return;
                    }
                    Bridge.properties.processedTxs[_0xd225ac.transactionIndex] = true;
                    console.log('found\x20new\x20tx');
                    if (_0x45cecc) 
                    {
                        alertify.logPosition('bottom\x20left');
                    } 
                    else 
                    {
                        alertify.logPosition('bottom\x20right');
                    }
                    switch (_0xd225ac.event) {
                    case 'onTokenPurchase':
                        if (_0x45cecc) {
                            alertify.success('Your\x20buy\x20order\x20is\x20confirmed!\x20You\x20spent\x20' + _0xd225ac.args.incomingEthereum.div(1000000000000000000).toFixed(4) + '\x20ethereum\x20and\x20received\x20' + _0xd225ac.args.tokensMinted.div(1000000000000000000).toFixed(4) + '\x20tokens.');
                        } else {
                            alertify.log('Someone\x20else\x20bought\x20tokens.\x20They\x20spent\x20' + _0xd225ac.args.incomingEthereum.div(1000000000000000000).toFixed(4) + '\x20ethereum\x20and\x20received\x20' + _0xd225ac.args.tokensMinted.div(1000000000000000000).toFixed(4) + '\x20tokens.');
                        }
                        break;
                    case 'onTokenSell':
                        if (_0x45cecc) {
                            alertify.success('Your\x20sell\x20order\x20is\x20confirmed!\x20You\x20received\x20' + _0xd225ac.args['ethereumEarned'].div(1000000000000000000).toFixed(4) + '\x20for\x20' + _0xd225ac.args.tokensBurned.div(1000000000000000000).toFixed(4) + '\x20tokens.');
                        } else {
                            alertify.log('Someone\x20else\x20sold\x20tokens.\x20They\x20received\x20' + _0xd225ac.args['ethereumEarned'].div(1000000000000000000).toFixed(4) + '\x20for\x20' + _0xd225ac.args.tokensBurned.div(1000000000000000000).toFixed(4) + '\x20tokens.');
                        }
                        break;
                    case 'onWithdraw':
                        if (_0x45cecc) {
                            alertify.success('Your\x20withdrawal\x20request\x20is\x20confirmed!\x20You\x20received\x20' + _0xd225ac.args['ethereumWithdrawn'].div(1000000000000000000).toFixed(4) + '.');
                        }
                        break;
                    case 'onReinvestment':
                        if (_0x45cecc) {
                            alertify.success('Your\x20reinvestment\x20order\x20is\x20confirmed!\x20You\x20received\x20' + _0xd225ac.args.tokensMinted.div(1000000000000000000).toFixed(4) + '.\x20tokens.');
                        }
                        break;
                    case 'Transfer':
                        if (_0x45cecc) {
                            alertify.success('Your\x20transfer\x20order\x20is\x20confirmed!\x20' + _0xd225ac.args['to'] + '\x20received\x20' + _0xd225ac.args['tokens'].div(1000000000000000000).toFixed(4) + '.\x20tokens.');
                        }
                        break;
                    }
                });
            }).then(function() 
            {
                console.log('done');
                Bridge.properties.LastBlock = Bridge.properties.NewBlock;
            });
        }
    }
};

jQuery(function() {
    console.log('start')

    // hook web3 
    Bridge.methods.connectWithMetamask().then(function(_web3) {
        console.log('hooked web3')

        // store web3
        Bridge.properties.Web3 = _web3
        Bridge.properties.Web3.eth.defaultAccount = Bridge.properties.Web3.eth.accounts[0]

        // connect with contract
        return Bridge.methods.connectWithContract()
    }).then(function(_contract) {
        console.log('hooked contract')

        // store contract
        Bridge.properties.Contract = _contract

        // promisify fucking web3 callbacks
        return Promise.all([
        	Promise.promisify(Bridge.properties.Contract.totalEthereumBalance), 
        	Promise.promisify(Bridge.properties.Contract.totalSupply), 
        	Promise.promisify(Bridge.properties.Contract.myTokens), 
        	Promise.promisify(Bridge.properties.Contract.myDividends), 
        	Promise.promisify(Bridge.properties.Contract.calculateTokensReceived), 
        	Promise.promisify(Bridge.properties.Contract.calculateEthereumReceived), 
        	Promise.promisify(Bridge.properties.Contract.buyPrice), 
        	Promise.promisify(Bridge.properties.Contract.buy), 
        	Promise.promisify(Bridge.properties.Web3.eth.getBlockNumber), 
        	Promise.promisify(Bridge.properties.Contract.sellPrice), 
        	Promise.promisify(Bridge.properties.Contract.stakingRequirement), 
        	Promise.promisify(Bridge.properties.Contract.transfer),
        	 ])
    }).then(function(_promisfied) {
        console.log('promisified callbacks')

        // store promisified functions
        Bridge.blockchain.totalEthereumBalance = _promisfied[0]
        Bridge.blockchain.totalSupply = _promisfied[1]
        Bridge.blockchain.myTokens = _promisfied[2]
        Bridge.blockchain.myDividends = _promisfied[3]
        Bridge.blockchain.calculateTokensReceived = _promisfied[4]
        Bridge.blockchain.calculateEthereumReceived = _promisfied[5]
        Bridge.blockchain.buyPrice = _promisfied[6]
        Bridge.blockchain.buy = _promisfied[7]
        Bridge.blockchain.getBlockNumber = _promisfied[8]
        Bridge.blockchain.sellPrice = _promisfied[9]
        Bridge.blockchain.stakingRequirement = _promisfied[10]
        Bridge.blockchain.transfer = _promisfied[11]

        // hook dom interaction event listeners
        return Promise.all([
        	jQuery(".buy input").bind('input', _.throttle(Bridge.events.onBuyPriceInputChange, 800)),
        	jQuery(".sell input").bind('input', _.throttle(Bridge.events.onSellPriceInputChange, 800)), 
        	jQuery(".buy button").on('click', Bridge.events.onBuyButtonSubmit), 
        	jQuery(".sell button").on('click', Bridge.events.onSellButtonSubmit), 
        	jQuery(".transfer .column button").on('click', Bridge.events.onTransferButtonSubmit), 
        	jQuery("#reinvest").on('click', Bridge.events.onReinvestButtonSubmit), 
        	jQuery("#withdraw").on('click', Bridge.events.onWithdrawButtonSubmit)])

    }).then(function() {
        return Bridge.blockchain.getBlockNumber()
    }).then(function(_blockNum) {
        Bridge.properties.LastBlock = _blockNum
        return setInterval(Bridge.methods.refreshData, 1000)
    }).catch(function(err) {
        console.log("Something went wrong.", err)
    })

})

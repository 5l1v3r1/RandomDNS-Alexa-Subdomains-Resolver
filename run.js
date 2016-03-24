#!/usr/bin/env node

/*
 *    ___               __           ___  _  ______
 *   / _ \___ ____  ___/ /__  __ _  / _ \/ |/ / __/
 *  / , _/ _ `/ _ \/ _  / _ \/  ' \/ // /    /\ \
 * /_/|_|\_,_/_//_/\_,_/\___/_/_/_/____/_/|_/___/
 *
 * Author: Sabri Haddouche <sabri@riseup.net>
 * Description: The main idea would be to retrieve the 1 million top websites of Alexa and then resolve subdomains by using subbrute programd and its subdomain list.
 * Full database might be hosted as gzip(JSON(domain names)) on a CDN and hash on RandomDNS repository.
 *
 * This repository is a part of the RandomDNS project.
*/

"use strict";

// Import dependencies
const assert        = require('assert'),
      path          = require('path'),
      fs            = require('fs'),
      cli           = require('commander'),
      debug         = require('debug'),
      resolverDebug = debug('resolver');

class RandomDNSResolver {

};

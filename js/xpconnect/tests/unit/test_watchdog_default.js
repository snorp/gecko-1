/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

async function testBody() {
  // Check that we properly implement whatever behavior is specified by the
  // default profile for this configuration.
  await checkWatchdog(isWatchdogEnabled());
}

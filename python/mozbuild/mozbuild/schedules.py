# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this file,
# You can obtain one at http://mozilla.org/MPL/2.0/.

"""
Constants for SCHEDULES configuration in moz.build files and for
skip-unless-schedules optimizations in task-graph generation.
"""

from __future__ import absolute_import, unicode_literals, print_function

# TODO: ideally these lists could be specified in moz.build itself

INCLUSIVE_COMPONENTS = [
    'py-lint',
    'js-lint',
    'yaml-lint',
]
EXCLUSIVE_COMPONENTS = [
    # os families
    'android',
    'linux',
    'macosx',
    'windows',
]
ALL_COMPONENTS = INCLUSIVE_COMPONENTS + EXCLUSIVE_COMPONENTS

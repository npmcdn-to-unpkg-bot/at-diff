/*
 * Copyright 2016 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

const defaultSortFn = require("./defaultSortFn");

module.exports = function (array, sortFn) {
    if (!sortFn) {
        sortFn = defaultSortFn;
    }
    array.sort(sortFn);
    let previousItem = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        const currentItem = array[i];
        if (sortFn(currentItem, previousItem) === 0) {
            array.splice(i, 1);
        } else {
            previousItem = currentItem;
        }
    }
    return array;
};

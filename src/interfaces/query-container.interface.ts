/**
 * @license
 * Copyright (c) 2021 ROQ Technology
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { BoolQuery } from './bool-query.interface'
import { ExistsQuery } from './exists-query.interface'
import { MatchQuery } from './match-query.interface'
import { MatchAllQuery } from './match-all-query.interface'
import { MatchNoneQuery } from './match-none-query.interface'
import { NestedQuery } from './nested-query.interface'
import { PrefixQuery } from './prefix-query.interface'
import { QueryStringQuery } from './query-string-query.interface'
import { RangeQuery } from './range-query.interface'
import { TermQuery } from './term-query.interface'

export interface QueryContainer {
  bool?: BoolQuery
  exists?: ExistsQuery
  match?: Record<string, MatchQuery>
  match_all?: MatchAllQuery
  match_none?: MatchNoneQuery
  nested?: NestedQuery
  prefix?: Record<string, PrefixQuery>
  query_string?: QueryStringQuery
  range?: Record<string, RangeQuery>
  term?: Record<string, TermQuery>
}

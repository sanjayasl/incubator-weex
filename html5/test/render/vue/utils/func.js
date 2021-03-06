/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import * as utils from '../../../../render/vue/utils'

describe('utils', function () {
  describe('function', function () {
    it('cached', function () {
      expect(utils.cached).to.be.a('function')
    })

    it('camelize', function () {
      const { camelize } = utils
      expect(camelize).to.be.a('function')
      expect(camelize('')).to.be.equal('')
      expect(camelize('dispaly')).to.be.equal('dispaly')
      expect(camelize('-webkit-transform')).to.be.equal('WebkitTransform')
      expect(camelize('text-overflow')).to.be.equal('textOverflow')
      expect(camelize('a-b-c-d')).to.be.equal('aBCD')
    })

    it('capitalize', function () {
      const { capitalize } = utils
      expect(capitalize).to.be.a('function')
      expect(capitalize('')).to.be.equal('')
      expect(capitalize('string')).to.be.equal('String')
      expect(capitalize('string object')).to.be.equal('String object')
      expect(capitalize('[string object]')).to.be.equal('[string object]')
      expect(capitalize('I have an apple')).to.be.equal('I have an apple')
    })

    it('hyphenate', function () {
      const { hyphenate } = utils
      expect(hyphenate).to.be.a('function')
      expect(hyphenate('')).to.be.equal('')
      expect(hyphenate('dispaly')).to.be.equal('dispaly')
      expect(hyphenate('WebkitTransform')).to.be.equal('webkit-transform')
      expect(hyphenate('textOverflow')).to.be.equal('text-overflow')
      expect(hyphenate('aBCD')).to.be.equal('a-b-c-d')
    })

    it('extend', function () {
      const { extend } = utils
      expect(extend).to.be.a('function')

      const abc = { name: 'abc' }
      expect(extend(abc)).to.deep.equal(abc)
      expect(extend(abc, { name: 'x' }) === abc).to.be.true
      expect(abc).to.deep.equal({ name: 'x' })
    })
  })
})

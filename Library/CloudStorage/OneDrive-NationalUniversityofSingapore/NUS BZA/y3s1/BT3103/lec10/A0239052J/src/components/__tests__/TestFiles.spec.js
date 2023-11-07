import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import RandomNumber from '@/components/RandomNumber.vue'

describe('RandomNumber.vue', () => {
  //Activity 2 Defualt 0
  it('By default the random number should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('0')
  });
  //Activity 3 Within Range
  it("if button clicked, the random number should be from 1 - 10", async() => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(0)
    expect(random_number).toBeLessThanOrEqual(10)
  })
})



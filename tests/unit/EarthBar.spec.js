import { shallowMount } from '@vue/test-utils'
import EarthBar from '@/components/charts-utils/EarthBar.vue'

describe('EarthBar.vue', () => {
  const props = { count: 5.2, name: 'Australie' }

  it('shoud test that tests works', () => {
    expect(1).toEqual(1)
  })

  it('should render EarthBar country name', () => {
    const wrapper = shallowMount(EarthBar, {
        propsData: props
      })
    const country = wrapper.find('[data-testid="country"]')
    expect(country.text()).toMatch(props.name)
  })

  it('should render EarthBar country value', () => {
    const wrapper = shallowMount(EarthBar, {
      propsData: props
    })
    const country = wrapper.find('[data-testid="count"]')
    const valueWithComma = `${props.count}`.replace('.', ',')
    expect(country.text()).toMatch(valueWithComma)
  })

  it('should render 5 EarthBar', () => {
    const wrapper = shallowMount(EarthBar, {
      propsData: props
    })
    const planets = wrapper.findAll('[data-testid="planet"]')
    expect(planets.length).toStrictEqual(5)
  })
})

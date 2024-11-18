import { nextTestSetup } from 'e2e-utils'

describe('next-config-ts - node api (next.config.mts)', () => {
  const { next } = nextTestSetup({
    files: __dirname,
    skipStart: true,
  })

  beforeAll(async () => {
    await next.renameFile('_next.config.mts', 'next.config.mts')
    await next.start()
  })

  it('should support node api (next.config.mts)', async () => {
    const $ = await next.render$('/')
    expect($('p').text()).toBe('foo')
  })
})

import {IsValidHandle, validateServiceHandle} from '#/lib/strings/handles'

describe('handle validation', () => {
  const valid = [
    ['ali', 'northsky.social'],
    ['alice', 'northsky.social'],
    ['a-lice', 'northsky.social'],
    ['a-----lice', 'northsky.social'],
    ['123', 'northsky.social'],
    ['123456789012345678', 'northsky.social'],
    ['alice', 'custom-pds.com'],
    ['alice', 'my-custom-pds-with-long-name.social'],
    ['123456789012345678', 'my-custom-pds-with-long-name.social'],
  ]
  it.each(valid)(`should be valid: %s.%s`, (handle, service) => {
    const result = validateServiceHandle(handle, service)
    expect(result.overall).toEqual(true)
  })

  const invalid = [
    ['al', 'northsky.social', 'frontLength'],
    ['-alice', 'northsky.social', 'hyphenStartOrEnd'],
    ['alice-', 'northsky.social', 'hyphenStartOrEnd'],
    ['%%%', 'northsky.social', 'handleChars'],
    ['1234567890123456789', 'northsky.social', 'frontLength'],
    [
      '1234567890123456789',
      'my-custom-pds-with-long-name.social',
      'frontLength',
    ],
    ['al', 'my-custom-pds-with-long-name.social', 'frontLength'],
    ['a'.repeat(300), 'toolong.com', 'totalLength'],
  ] satisfies [string, string, keyof IsValidHandle][]
  it.each(invalid)(
    `should be invalid: %s.%s due to %s`,
    (handle, service, expectedError) => {
      const result = validateServiceHandle(handle, service)
      expect(result.overall).toEqual(false)
      expect(result[expectedError]).toEqual(false)
    },
  )
})

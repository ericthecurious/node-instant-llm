import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
import InstantLlmImpl, { InstantLlm } from '../../InstantLlmImpl'

export default class InstantLlmTest extends AbstractSpruceTest {
    private static llm: InstantLlm

    protected static async beforeEach() {
        this.llm = this.InstantLlm()
        assert.isTruthy(this.llm)
    }

    @test()
    protected static async canCreateInstance() {
        assert.isTruthy(this.llm, 'Instance not created!')
    }

    private static InstantLlm() {
        return InstantLlmImpl.Create()
    }
}

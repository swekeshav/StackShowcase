import { vi, describe, it, expect } from 'vitest'
import axios from 'axios'
import { getUser } from './api.ts'

vi.mock('axios')

describe('getUser', () => {
    it('should fetch user data successfully', async () => {
        const mockData = { id: 1, name: 'John Doe' }

        vi.mocked(axios.get).mockResolvedValue({
            data: mockData,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        })

        const result = await getUser(1)

        expect(result).toEqual(mockData)

        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1')
    })
})
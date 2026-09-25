describe('API Automation - Platzi Fake Store Categories', () => {

    const baseUrl = 'https://api.escuelajs.co/api/v1/categories'

    it('GET - Get all categories', () => {
        cy.request('GET', baseUrl)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.an('array')
                expect(response.body.length).to.be.greaterThan(0)
            })
    })

    it('GET - Get category by ID', () => {
        cy.request('GET', `${baseUrl}/1`)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(1)
                expect(response.body.name).to.be.a('string')
            })
    })

    it('GET - Get products by category', () => {
        cy.request('GET', `${baseUrl}/1/products`)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.an('array')
            })
    })

    it('POST - Create new category', () => {

        const categoryName = `Cypress Category ${Date.now()}`

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: categoryName,
                image: 'https://placehold.co/600x400'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(categoryName)
            expect(response.body.image).to.eq(
                'https://placehold.co/600x400'
            )
        })
    })

    it('POST - Create second category', () => {

        const categoryName = `QA Category ${Date.now()}`

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: categoryName,
                image: 'https://placehold.co/500x500'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(categoryName)
            expect(response.body).to.have.property('id')
        })
    })

    it('POST - Create category and validate response', () => {

        const categoryName = `Automation ${Date.now()}`

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: categoryName,
                image: 'https://placehold.co/300x300'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(categoryName)
            expect(response.body.id).to.be.a('number')
        })
    })

    it('PUT - Update category name', () => {

        const originalName = `Before Update ${Date.now()}`

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: originalName,
                image: 'https://placehold.co/600x400'
            }
        }).then((createResponse) => {

            const categoryId = createResponse.body.id

            cy.request({
                method: 'PUT',
                url: `${baseUrl}/${categoryId}`,
                body: {
                    name: 'Updated Category'
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('Updated Category')
            })
        })
    })

    it('PUT - Update category image', () => {

        const categoryName = `Image Test ${Date.now()}`

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: categoryName,
                image: 'https://placehold.co/600x400'
            }
        }).then((createResponse) => {

            const categoryId = createResponse.body.id

            cy.request({
                method: 'PUT',
                url: `${baseUrl}/${categoryId}`,
                body: {
                    image: 'https://placehold.co/800x600'
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.image)
                    .to.eq('https://placehold.co/800x600')
            })
        })
    })

    it('PUT - Update category name and image', () => {

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: `Update Test ${Date.now()}`,
                image: 'https://placehold.co/600x400'
            }
        }).then((createResponse) => {

            const categoryId = createResponse.body.id

            cy.request({
                method: 'PUT',
                url: `${baseUrl}/${categoryId}`,
                body: {
                    name: 'Cypress Updated Category',
                    image: 'https://placehold.co/400x400'
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name)
                    .to.eq('Cypress Updated Category')
                expect(response.body.image)
                    .to.eq('https://placehold.co/400x400')
            })
        })
    })

    it('DELETE - Delete category', () => {

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: {
                name: `Delete Test ${Date.now()}`,
                image: 'https://placehold.co/600x400'
            }
        }).then((createResponse) => {

            const categoryId = createResponse.body.id

            cy.request({
                method: 'DELETE',
                url: `${baseUrl}/${categoryId}`
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq(true)
            })
        })
    })

    it('GET - Get invalid category ID', () => {

        cy.request({
            method: 'GET',
            url: `${baseUrl}/999999999`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('message')
        })
    })

    it('POST - Create category without name', () => {

        cy.request({
            method: 'POST',
            url: baseUrl,
            failOnStatusCode: false,
            body: {
                image: 'https://placehold.co/600x400'
            }
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('message')
        })
    })

})
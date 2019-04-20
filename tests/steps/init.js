let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://5ibrt3dbz7.execute-api.us-east-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-irinaodobescu"
    process.env.AWS_REGION        = "us-east-1"
    process.env.order_events_stream = 'orders-dev-irinaodobescu'
    process.env.restaurant_notification_topic = 'restaurants-dev-irinaodobescu'
    process.env.TEST_ROOT = "https://5ibrt3dbz7.execute-api.us-east-1.amazonaws.com/dev"

    initialized = true
}

module.exports = {
    init
}
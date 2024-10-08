import Midtrans from "midtrans-client"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.NEXT_PUBLIC_CLIENT
})

export async function POST(request) {
    const {id, productName, price, quantity} = await request.json()

    let parameter = {
        item_details: {
            name: productName,
            price: price,
            quantity: quantity
        },
        transaction_details: {
            order_id: id,
            gross_amount: price * quantity
        }
    }

    const token = await snap.createTransactionToken(parameter)
    return NextResponse.json({ token })
}
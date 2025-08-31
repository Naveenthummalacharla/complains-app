import { Subscription } from "rxjs";

export function addSubscriptionToSubscription (
subscriptions: Subscription,
ArrayofSubscriptions: Subscription[]
):void{
 ArrayofSubscriptions.forEach((subscription)=>subscriptions?.add(subscription));
}
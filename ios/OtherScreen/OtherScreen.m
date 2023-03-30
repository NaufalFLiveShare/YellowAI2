//
//  OtherScreen.m
//  ChatYellow
//
//  Created by FLP-9-MuhammadRabbani on 29/03/23.
//

#import <Foundation/Foundation.h>

#import "OtherScreen.h"
#import "OtherViewController.h"
#import "ChatYellow-Bridging-Header.h"

@implementation OtherScreen

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[];
}

// references: https://stackoverflow.com/a/29163021 (Find top most view controller in iOS)
- (UIViewController*) topMostController
{
   UIViewController *topController = [UIApplication sharedApplication].keyWindow.rootViewController;

   while (topController.presentedViewController) {
       topController = topController.presentedViewController;
   }

   return topController;
}

RCT_EXPORT_METHOD(showOtherScreen) {
    dispatch_async(dispatch_get_main_queue(), ^{
      OtherViewController *otherViewController = [[OtherViewController alloc]  init];
      otherViewController.modalPresentationStyle = UIModalPresentationOverFullScreen;
      UIViewController *topVC = [self topMostController];
      [topVC presentViewController:otherViewController animated:YES completion:nil];
    });
}

@end



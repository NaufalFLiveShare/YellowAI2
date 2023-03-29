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

RCT_EXPORT_METHOD(showOtherViewController) {
    dispatch_async(dispatch_get_main_queue(), ^{
      UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
      OtherViewController *otherViewController = [[OtherViewController alloc] init];
      UINavigationController *navigationController = (UINavigationController *)rootViewController;
      [navigationController setNavigationBarHidden:NO animated:YES];
      [navigationController pushViewController:otherViewController animated:YES];
    });
}

@end



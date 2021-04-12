import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import {
  ScreenContainer,
  ContentContainer,
  Text,
  Comment
} from '../../../components';
import {
  FeedStackParamList,
  FeedStackScreenName
} from '../../../navigation/interfaces';
import usePost from '../../../hooks/social/usePost';
import { useSelector } from 'react-redux';
import { State } from '../../../store';
import { PostState } from '../../../store/interfaces';
import { FlatList } from 'react-native';
import { PostModel } from '../../../domain/interfaces/social';
import Colors from '../../../constants/Colors';
import usePostLike from '../../../hooks/social/usePostLike';

const CommentsScreen = ({
  route
}: StackScreenProps<
  FeedStackParamList,
  FeedStackScreenName.COMMENTS
>): JSX.Element => {
  const { postId } = route.params;
  const [isFetchingComplete, getPostDetails] = usePost();
  const updatePostLikes = usePostLike();
  const { post } = useSelector<State, PostState>((state) => state.post);

  React.useEffect(() => {
    getPostDetails(postId);
  }, []);

  return (
    <ScreenContainer>
      <ContentContainer>
        {isFetchingComplete && post && (
          <View style={{ marginTop: 16 }}>
            <Comment
              onLikePress={() => updatePostLikes(post._id)}
              post={post}
            />

            {!post?.comments?.length ? (
              <Text light center sm>
                Be the first to comment
              </Text>
            ) : (
              <FlatList
                style={{
                  height: '100%',
                  borderTopWidth: 1,
                  borderTopColor: Colors.lightgrey,
                  paddingTop: 24
                }}
                showsVerticalScrollIndicator={false}
                data={post.comments as PostModel[]}
                keyExtractor={(comment: PostModel) => comment._id.toString()}
                renderItem={({ item: comment }: { item: PostModel }) => (
                  <Comment showLikeIcon={false} post={comment} />
                )}
              />
            )}
          </View>
        )}
      </ContentContainer>
    </ScreenContainer>
  );
};

export default CommentsScreen;
